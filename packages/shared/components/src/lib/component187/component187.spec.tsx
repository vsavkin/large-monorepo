import { render } from '@testing-library/react';

import Component187 from './component187';

describe('Component187', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component187 />);
    expect(baseElement).toBeTruthy();
  });
});
