import { NumberField, Show, TextField } from "@refine-geneziodev/antd";
import { useShow } from "@refine-geneziodev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const AuthorShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <NumberField value={record?.id ?? ""} />
      <Title level={5}>{"Name"}</Title>
      <TextField value={record?.name} />
    </Show>
  );
};
