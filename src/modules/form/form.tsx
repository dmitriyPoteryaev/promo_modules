'use client';

import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { Input, Select } from 'antd';
import { ClientLayout } from '../../ui/client-layout/client-layout';
import classes from './style/form.module.scss';
import countryList from 'react-select-country-list';
import { FormInput } from '../../ui/form-input/form-input';

const regValue =
  /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

const rightSideInputs = [
  {
    required: {
      required: 'County is required'
    },
    name: 'company',
    placeholder: 'Company'
  },
  {
    name: 'adress',
    placeholder: 'Adress'
  },
  {
    name: 'city',
    placeholder: 'City'
  },
  {
    name: 'zip',
    placeholder: 'Zip/Postal Code'
  },
  {
    name: 'country',
    placeholder: 'Country'
  }
];

const leftSideInputs = [
  {
    required: {
      required: 'First name is required'
    },
    name: 'firstName',
    placeholder: 'First name'
  },
  {
    required: {
      required: 'Last name is required'
    },
    name: 'lastName',
    placeholder: 'Last name'
  },
  {
    name: 'email',
    required: {
      required: 'Email ID is required',
      pattern: {
        value: regValue,
        message: 'Email is invalid'
      }
    },
    placeholder: 'Email'
  },
  {
    name: 'telephone',
    placeholder: 'Telephone'
  }
];

type FormFileds = {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  quoteComments: string;
  country: string;
  state: string;
  zip: string;
  city: string;
  adress: string;
  county: string;
};

const { TextArea } = Input;

export const FormExample = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      firstName: '',
      email: '',
      lastName: '',
      telephone: '',
      state: '',
      country: '',
      quoteComments: '',
      zip: '',
      city: '',
      adress: '',
      county: ''
    }
  });

  const onSubmit: SubmitHandler<FormFileds> = (data) => {
    console.log(data);
  };

  return (
    <ClientLayout>
      <section
        style={{ display: 'flex', width: '100%', justifyContent: 'center', height: '100vh' }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: 'flex',
            maxWidth: '1138px',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            marginBottom: '30px'
          }}
        >
          <div style={{ width: '40%' }}>
            {leftSideInputs.map((inputInfo) => {
              const { required, name, placeholder } = inputInfo;

              return (
                <FormInput
                  control={control}
                  errors={errors}
                  key={name}
                  name={name}
                  required={required}
                  placeholder={placeholder}
                />
              );
            })}
            <div style={{ position: 'relative' }}>
              <Controller
                name="quoteComments"
                control={control}
                render={({ field }) => (
                  <TextArea
                    style={{
                      width: '100%',
                      backgroundColor: '#E3E3E3',
                      maxHeight: '430px',
                      marginTop: '43px',
                      minHeight: '175px'
                    }}
                    placeholder="Quote comments"
                    {...field}
                  />
                )}
              />
              {errors.telephone?.message && (
                <div
                  style={{
                    bottom: '-60px',
                    height: '60px',
                    marginTop: '43px',
                    position: 'absolute'
                  }}
                >
                  {errors.telephone?.message}
                </div>
              )}
            </div>
          </div>
          {/*the right side */}
          <div style={{ width: '40%' }}>
            {rightSideInputs.map((inputInfo) => {
              const { required, name, placeholder } = inputInfo;

              return (
                <FormInput
                  key={name}
                  control={control}
                  errors={errors}
                  required={required}
                  name={name}
                  placeholder={placeholder}
                />
              );
            })}
            <div style={{ position: 'relative' }}>
              <Controller
                name="state"
                control={control}
                render={({ field }) => (
                  <Select
                    showSearch
                    {...field}
                    placeholder="Select here"
                    optionFilterProp="label"
                    style={{
                      width: '100%',
                      backgroundColor: '#E3E3E3',
                      height: '60px',
                      marginTop: '43px'
                    }}
                    options={countryList().getData()}
                  />
                )}
              />
            </div>
          </div>

          <input style={{ position: 'absolute', left: '50%' }} type="submit" />
        </form>
      </section>
    </ClientLayout>
  );
};
