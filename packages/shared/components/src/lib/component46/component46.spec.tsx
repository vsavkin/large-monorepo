import { render } from '@testing-library/react';

import Component46 from './component46';

describe('Component46', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component46 />);
    expect(baseElement).toBeTruthy();
  });
});
