import { render } from '@testing-library/react';

import Component100 from './component100';

describe('Component100', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component100 />);
    expect(baseElement).toBeTruthy();
  });
});
