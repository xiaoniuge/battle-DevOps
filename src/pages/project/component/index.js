import { Form, Input } from 'antd';

const ProjectProfile = ({ form, onFinish }) => {
  return (
    <Form form={form} onFinish={onFinish} preserve={false}>
      <Form.Item label="名称" name="name">
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item label="描述" name="description">
        <Input.TextArea placeholder="请输入" />
      </Form.Item>
    </Form>
  );
};

export default ProjectProfile;
