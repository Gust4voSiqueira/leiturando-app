import React, { forwardRef } from 'react';
import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
  theme,
} from 'native-base';
import { Platform } from 'react-native';

type Props = IInputProps & {
  errorMessage?: string | null;
  isErrors: boolean;
};

export const InputRegister = forwardRef(({ errorMessage = null, isInvalid, isErrors, ...rest }: Props, ref) => {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput
        ref={ref}
        bg={theme.colors.white}
        borderRadius={4}
        color={theme.colors.gray[900]}
        width={'100%'}
        height={Platform.OS === 'ios' ? 45 : 12}
        fontSize={theme.fontSizes.sm}
        borderWidth={!isErrors ? 1 : 2}
        borderColor={!isErrors ? theme.colors.white : theme.colors.red[700]}
        autoCapitalize="none"
        _focus={{
          bg: theme.colors.white,
          borderColor: !isErrors ? theme.colors.white : theme.colors.red[700],
        }}
        {...rest}
      />
    </FormControl>
  );
});

