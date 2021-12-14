import { render } from '@testing-library/react';

import ImportantComponent227 from './important-component-227';

describe('ImportantComponent227', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent227 />);
    expect(baseElement).toBeTruthy();
  });
});
