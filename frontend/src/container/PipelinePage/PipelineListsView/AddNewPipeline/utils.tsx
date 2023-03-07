import React from 'react';

import { pipelineFields } from '../config';
import { PipelineColumn } from '../types';
import DescriptionTextArea from './FormFields/DescriptionTextArea';
import FilterSearch from './FormFields/FilterSearch';
import NameInput from './FormFields/NameInput';
import ProcessorTags from './FormFields/ProcessorTags';

export const renderPipelineForm = (
	setTagsListData: (tags: Array<string>) => void,
	tagsListData?: PipelineColumn['tags'],
): Array<JSX.Element> =>
	pipelineFields.map((fieldName) => {
		if (fieldName.id === '1') {
			return <FilterSearch key={fieldName.id} fieldData={fieldName} />;
		}
		if (fieldName.id === '2') {
			return <NameInput key={fieldName.id} fieldData={fieldName} />;
		}
		if (fieldName.id === '3') {
			return (
				<ProcessorTags
					key={fieldName.id}
					fieldData={fieldName}
					setTagsListData={setTagsListData}
					tagsListData={tagsListData as []}
				/>
			);
		}
		return <DescriptionTextArea key={fieldName.id} fieldData={fieldName} />;
	});
