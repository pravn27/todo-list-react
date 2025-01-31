import styled from "styled-components";
import { List } from "antd";
import { EditOutlined } from "@ant-design/icons";

export const EditOutlinedStyled = styled(EditOutlined)`
  position: absolute;
  right: 0;
  opacity: 0;
  transition: opacity 0.3s;
`;

export const ListItemStyled = styled(List.Item)`
  &&&& {
    .todo-item:hover span.hover-edit-icon {
      opacity: 1 !important;
    }

    .edit-button {
      visibility: hidden;
    }

    .todo-item:hover .edit-button {
      visibility: visible;
    }
  }
`;
