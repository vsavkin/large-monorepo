import { render } from '@testing-library/react';

import Component16 from './component16';

describe('Component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component16 />);
    expect(baseElement).toBeTruthy();
  });
});
