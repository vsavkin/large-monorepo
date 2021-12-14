import { render } from '@testing-library/react';

import Component26 from './component26';

describe('Component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component26 />);
    expect(baseElement).toBeTruthy();
  });
});
