import { render } from '@testing-library/react';

import Component152 from './component152';

describe('Component152', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component152 />);
    expect(baseElement).toBeTruthy();
  });
});
