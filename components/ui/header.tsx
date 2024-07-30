import React from "react";

interface HeaderProps {
  title: string;
  description?: string;
}

const PageHeader = (props: HeaderProps) => {
  const { title, description } = props;
  return (
    <div className="flex-1">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default PageHeader;
