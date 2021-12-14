import { render } from '@testing-library/react';

import Component7 from './component7';

describe('Component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component7 />);
    expect(baseElement).toBeTruthy();
  });
});
