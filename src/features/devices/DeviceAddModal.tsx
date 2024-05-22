import React from 'react'
import {Form, Button, Input, Modal} from 'antd';

const handleCancel = () => {
    console.log("handle cancel")
}

const handleOk = () => {
    console.log("handle ok")
}

const handleSubmit = (values: any) => {
    console.log(values)
}

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };


const DeviceAddModal: React.FC = () => {
    const [form] = Form.useForm()
  return (
    <Modal
    title="Add Device"
    onCancel={handleCancel}
    footer={[
      <Button type="primary" onClick={handleOk}>
        Submit
      </Button>,
      <Button onClick={handleCancel}>
        Cancel
      </Button>,
    ]}
  >
          <Form {...layout} form={form} onFinish={handleSubmit}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="school" label="School" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="address" label="Address" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default DeviceAddModal