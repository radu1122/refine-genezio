import { NumberField, Show, TextField } from "@refine-geneziosd-geneziodev/antd";
import { useShow } from "@refine-geneziosd-geneziodev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const CategoryShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <NumberField value={record?.id ?? ""} />
      <Title level={5}>{"Title"}</Title>
      <TextField value={record?.title} />
    </Show>
  );
};
