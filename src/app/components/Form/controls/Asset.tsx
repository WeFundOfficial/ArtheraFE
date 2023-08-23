import styled from "@emotion/styled"
import { InputControlProps } from "../types/controls"
import { LabelComponent } from "../components/Label"
import { useInputError } from "../hooks/useInputError"
import { AssistiveTextComponent } from "../components/AssistiveText"
import { AssetComponent } from "../components/Asset"

export const AssetControl = ({ label, form, hideLabel, ...rest }: InputControlProps) => {
  const { setField, setTouched, data } = form
  const { name } = rest

  const error = useInputError(name, form)
  const value = data[name] ?? ""

  return (
    <Wrapper>
      <LabelComponent label={label ?? name} hideLabel={hideLabel} />
      <AssetComponent
        {...rest}
        value={value}
        onChange={(e) => setField(name, e.target.value)}
        onBlur={() => setTouched(name)}
        state={error ? "error" : undefined}
      />
      <AssistiveTextComponent error={error} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  gap: 10px;
`
