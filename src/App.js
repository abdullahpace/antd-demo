import React, { useState } from 'react';
import { DatePicker, Form, message } from 'antd';
import 'antd/dist/reset.css';
import './index.css';
import FormItemLabel from 'antd/es/form/FormItemLabel';
import { useForm } from 'antd/es/form/Form';
import Input from 'antd/es/input/Input';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [date, setDate] = useState(null);
  const handleChange = (value) => {
    message.info(
      `Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`
    );
    setDate(value);
  };
  const [form] = useForm();
  return (
    <div className='container'>
      <Form form={form} name='form-name' layout='vertical'>
        <div className='row'>
          <div className='col-md-4'>
            <Form.Item name={'date'} label='Date'>
              <DatePicker onChange={handleChange} />
            </Form.Item>
          </div>
          <div className='col-md-4'>
            <Form.Item name={'name'} label='Name'>
              <Input />
            </Form.Item>
          </div>
        </div>
      </Form>

      <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
      </div>
    </div>
  );
}

export default App;
