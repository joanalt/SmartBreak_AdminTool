import Button from "./Secondarybtn";

export default {
  title: "Secondary buttons",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Button {...args} />;

export const AdicionarEquipa = Template.bind({});
AdicionarEquipa.args = {
  backgroundColor: "#07407B",
  label: "Adicionar equipa",
};

export const EliminarEquipa = Template.bind({});
EliminarEquipa.args = {
  backgroundColor: "#07407B",
  label: "Eliminar equipa",
};

export const Guardar = Template.bind({});
Guardar.args = {
  backgroundColor: "#07407B",
  label: "Guardar alterações",
};

export const EliminarFuncionario = Template.bind({});
EliminarFuncionario.args = {
  backgroundColor: "#07407B",
  label: "Eliminar funcionário",
};

export const Promover = Template.bind({});
Promover.args = {
  backgroundColor: "#07407B",
  label: "Promover a administrador",
};

export const Despromover = Template.bind({});
Despromover.args = {
  backgroundColor: "#07407B",
  label: "Despromover",
  bg: false,
};
