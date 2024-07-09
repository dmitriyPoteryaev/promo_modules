import React from 'react';
import { Controller } from 'react-hook-form';
import { Input } from 'antd';

export const FormInput = (props: any) => {
  const { control, errors, name, required, placeholder } = props;

  const requiredNotification = required ? required : null;

  return (
    <div style={{ position: 'relative' }}>
      <span
        style={{
          top: '-20px',
          height: '60px',
          marginTop: '43px',
          position: 'absolute',
          zIndex: '3'
        }}
      >
        {placeholder}
        {requiredNotification ? '*' : ''}
      </span>
      <Controller
        name={name}
        control={control}
        rules={requiredNotification}
        render={({ field }) => (
          <Input
            style={{ width: '100%', backgroundColor: '#E3E3E3', height: '60px', marginTop: '43px' }}
            type="text"
            placeholder={placeholder}
            {...field}
          />
        )}
      />
      {errors?.[name]?.message && (
        <div style={{ bottom: '-60px', height: '60px', marginTop: '43px', position: 'absolute' }}>
          {errors?.[name]?.message}
        </div>
      )}
    </div>
  );
};
