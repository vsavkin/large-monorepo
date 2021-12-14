import { render } from '@testing-library/react';

import Component118 from './component118';

describe('Component118', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component118 />);
    expect(baseElement).toBeTruthy();
  });
});
