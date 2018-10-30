import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import idx from 'idx';
import Styled from 'styled-components';

import Actions from '~/state/Actions';

import Select from '~/components/Select';
import Widget from '~/components/Widget';
import FileSectionWrapper from '~/components/FileSectionWrapper';
import FileSection from '~/components/FileSection';

const SelectWrapper = Styled.div`
  display: flex;
  justify-content: center;
  background: ${props => props.theme.colors.section};
  padding: 16px;
`;

const step = 1;

class KeySelectWidget extends PureComponent {
  render() {
    const { baseData, mergeData } = this.props;
    const baseKeys = idx(baseData, _ => _.columns) || [];
    const mergeKeys = idx(mergeData, _ => _.columns) || [];

    return (
      <Widget
        step={step}
        title={config.sections[step].title}
        subtitle={config.sections[step].subtitle}
      >
        <FileSectionWrapper>
          <FileSection>
            <SelectWrapper>
              <Select
                options={baseKeys}
                onChange={this.props.setBaseKey}
                placeholder="Select key..."
              />
            </SelectWrapper>
          </FileSection>
          <FileSection>
            <SelectWrapper>
              <Select
                options={mergeKeys}
                onChange={this.props.setMergeKey}
                placeholder="Select key..."
              />
            </SelectWrapper>
          </FileSection>
        </FileSectionWrapper>
      </Widget>
    );
  }
}

export default connect(state => ({
  baseData: state.baseData,
  mergeData: state.mergeData
}), Actions)(KeySelectWidget);