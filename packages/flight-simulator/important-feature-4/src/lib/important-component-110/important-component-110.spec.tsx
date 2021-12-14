import { render } from '@testing-library/react';

import ImportantComponent110 from './important-component-110';

describe('ImportantComponent110', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent110 />);
    expect(baseElement).toBeTruthy();
  });
});
