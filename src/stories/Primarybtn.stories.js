import Button from "./Primarybtn";

export default {
  title: "Primary buttons",
  component: Button,
  argTypes: { onClick: { action: "onClick" } },
};

const Template = (args) => <Button {...args} />;

export const Entrar = Template.bind({});
Entrar.args = {
  backgroundColor: "#07407B",
  label: "Entrar",
};

export const Registar = Template.bind({});
Registar.args = {
  backgroundColor: "#07407B",
  label: "Registar",
};

export const Seguinte = Template.bind({});
Seguinte.args = {
  backgroundColor: "#07407B",
  label: "Seguinte",
};
