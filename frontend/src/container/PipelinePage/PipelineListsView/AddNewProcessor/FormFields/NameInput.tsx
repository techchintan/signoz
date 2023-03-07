import { Form, Input } from 'antd';
import { ModalFooterTitle } from 'container/PipelinePage/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ProcessorFormField } from '../config';
import { Container, FormWrapper, PipelineIndexIcon } from '../styles';

function NameInput({ fieldData }: NameInputProps): JSX.Element {
	const { t } = useTranslation('pipeline');

	return (
		<Container>
			<PipelineIndexIcon size="small">
				{Number(fieldData.id) + 1}
			</PipelineIndexIcon>
			<FormWrapper>
				<Form.Item
					required={false}
					label={<ModalFooterTitle>{fieldData.fieldName}</ModalFooterTitle>}
					key={fieldData.id}
					name={fieldData.name}
					rules={[
						{
							required: true,
						},
					]}
				>
					<Input placeholder={t(fieldData.placeholder)} name={fieldData.name} />
				</Form.Item>
			</FormWrapper>
		</Container>
	);
}

interface NameInputProps {
	fieldData: ProcessorFormField;
}
export default NameInput;
