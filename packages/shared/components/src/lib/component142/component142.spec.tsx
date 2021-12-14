import { render } from '@testing-library/react';

import Component142 from './component142';

describe('Component142', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component142 />);
    expect(baseElement).toBeTruthy();
  });
});
