import React from 'react'
import { useForm, useWatch } from 'react-hook-form'

import { Intent } from '../../config/intent'
import { Validation } from '../../lib/form-validation'
import { Button } from '../button'
import { ButtonGroup } from '../button-group'
import { FormGroup } from '../form-group'

interface FormFields {
  wallet: string
  version: number
  passphrase: string
  confirmPassphrase: string
  recoveryPhrase: string
}

interface WalletImportFormProps {
  submit: (values: {
    wallet: string
    passphrase: string
    recoveryPhrase: string
    version: number
  }) => Promise<void>
  cancel: () => void
}

export function WalletImportForm({ submit, cancel }: WalletImportFormProps) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormFields>()
  const passphrase = useWatch({ control, name: 'passphrase' })

  return (
    <form onSubmit={handleSubmit(submit)}>
      <FormGroup
        label='Name'
        labelFor='wallet'
        helperText={errors.wallet?.message}
      >
        <input
          data-testid='wallet-name'
          type='text'
          {...register('wallet', { required: Validation.REQUIRED })}
          autoFocus={true}
        />
      </FormGroup>
      <FormGroup
        label='Recovery phrase'
        labelFor='recoveryPhrase'
        helperText={errors.recoveryPhrase?.message}
        intent={errors.recoveryPhrase?.message ? Intent.DANGER : Intent.NONE}
      >
        <textarea
          data-testid='recovery-phrase'
          {...register('recoveryPhrase', { required: Validation.REQUIRED })}
          style={{ minHeight: 75 }}
        />
      </FormGroup>
      <FormGroup
        label='Version'
        labelFor='version'
        intent={errors.version?.message ? Intent.DANGER : Intent.NONE}
        helperText={errors.version?.message}
      >
        <input
          data-testid='version'
          type='number'
          {...register('version', { required: Validation.REQUIRED })}
        />
      </FormGroup>
      <FormGroup
        label='Choose passphrase'
        labelFor='passphrase'
        intent={errors.passphrase?.message ? Intent.DANGER : Intent.NONE}
        helperText={errors.passphrase?.message}
      >
        <input
          data-testid='passphrase'
          type='password'
          {...register('passphrase', { required: Validation.REQUIRED })}
        />
      </FormGroup>
      <FormGroup
        data-testid='confirm-passphrase'
        label='Confirm passphrase'
        labelFor='confirmPassphrase'
        intent={errors.confirmPassphrase?.message ? Intent.DANGER : Intent.NONE}
        helperText={errors.confirmPassphrase?.message}
      >
        <input
          data-testid='confirm-passphrase'
          type='password'
          {...register('confirmPassphrase', {
            required: Validation.REQUIRED,
            pattern: Validation.match(passphrase)
          })}
        />
      </FormGroup>
      <ButtonGroup>
        <Button data-testid='submit' type='submit'>
          Submit
        </Button>
        <Button data-testid='cancel' onClick={cancel}>
          Cancel
        </Button>
      </ButtonGroup>
    </form>
  )
}
