import { render } from '@testing-library/react';

import ImportantComponent152 from './important-component-152';

describe('ImportantComponent152', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent152 />);
    expect(baseElement).toBeTruthy();
  });
});
