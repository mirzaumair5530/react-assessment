import { FC } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import type { DropResult } from "@hello-pangea/dnd";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { ItemCard } from "@src/components/shared-components/index.ts";
import {
  DeleteIcon,
  DraggableIcon,
  EyeIcon,
  UnhiddenIcon,
} from "@src/components/svg-icons";
import { useAppContext } from "@src/contexts/AppContext";

const DraggableList: FC = () => {
  const { data, setData } = useAppContext();

  const handleDelete = (index: number) => {
    setData((prevData) => {
      const tempData = [...prevData];
      return tempData.filter((_, _index) => _index !== index);
    });
  };

  const handleHide = (index: number) => {
    setData((prevData) => {
      const tempData = [...prevData];
      const findData = tempData.find((_, _index) => _index === index);
      if (findData) {
        findData.hidden = !findData.hidden;
      }
      return tempData;
    });
  };

  const handleDragEnd = (result: DropResult) => {
    try {
      const { destination, source } = result;
      setData((prevData) => {
        const tempData = [...prevData];
        const [sourceElement] = tempData.splice(source.index, 1);
        if (sourceElement && destination) {
          tempData.splice(destination.index, 0, sourceElement);
        }
        return tempData;
      });
    } catch (e) {
      console.error(e, "error in handleDragEnd");
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId={"homeFeeds"}>
        {(provided) => {
          return (
            <Box ref={provided.innerRef} {...provided.droppableProps}>
              {data.map((data, index) => {
                return (
                  <Draggable draggableId={`${index}`} index={index} key={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ItemCard
                          iconHoverColor={"#000"}
                          variant={"outlined"}
                          iconStyles={{ fontSize: "1rem" }}
                          p={"0.75rem"}
                          icon={<DraggableIcon />}
                          childrenStyles={{
                            flexGrow: 1,
                          }}
                        >
                          <Box
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                          >
                            <Box
                              flexGrow={1}
                              display={"flex"}
                              alignItems={"center"}
                              gap={"0.75rem"}
                            >
                              <Box fontSize={"1.125rem"}>
                                {data.type === "todo" ? `✅` : `☝️`}
                              </Box>
                              <Typography
                                fontSize={"1.125rem"}
                                fontWeight={"bold"}
                              >
                                {data.text}
                              </Typography>
                            </Box>

                            <Box
                              display={"flex"}
                              alignItems={"center"}
                              gap={"0.75rem"}
                            >
                              <IconButton onClick={() => handleDelete(index)}>
                                <DeleteIcon />
                              </IconButton>
                              <IconButton onClick={() => handleHide(index)}>
                                {data.hidden ? <UnhiddenIcon /> : <EyeIcon />}
                              </IconButton>
                            </Box>
                          </Box>
                        </ItemCard>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </Box>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableList;
