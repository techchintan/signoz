import { Input } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

function PiplinesSearchBar(): JSX.Element {
	const { t } = useTranslation(['pipeline']);

	return (
		<Input.Search placeholder={t('search_pipeline_placeholder')} allowClear />
	);
}

export default PiplinesSearchBar;
