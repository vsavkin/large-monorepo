import { render } from '@testing-library/react';

import Component79 from './component79';

describe('Component79', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component79 />);
    expect(baseElement).toBeTruthy();
  });
});
