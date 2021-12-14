import { render } from '@testing-library/react';

import Component181 from './component181';

describe('Component181', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component181 />);
    expect(baseElement).toBeTruthy();
  });
});
