import { render } from '@testing-library/react';

import Component159 from './component159';

describe('Component159', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component159 />);
    expect(baseElement).toBeTruthy();
  });
});
