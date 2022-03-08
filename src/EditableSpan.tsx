import React, { ChangeEvent, useState } from "react";

type EditableSpanPropsType = {
  title: string;
  onChange : (newValue : string) => void
};

export const EditableSpan = (props: EditableSpanPropsType) => {
  let [editMode, setEditMode] = useState(false);
  let [title, setTitle] = useState("");

  const activeEditmode = () => {
      setEditMode(true);
    setTitle(props.title)
    }
  const activeViewmode = () => setEditMode(false);
  const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  return editMode ? (
    <input
      value={title}
      onChange={onChangeTitleHandler}
      onBlur={activeViewmode}
      autoFocus
    />
  ) : (
    <span onDoubleClick={activeEditmode}>{props.title}</span>
  );
};
