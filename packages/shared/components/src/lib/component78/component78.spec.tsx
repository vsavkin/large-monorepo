import { render } from '@testing-library/react';

import Component78 from './component78';

describe('Component78', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component78 />);
    expect(baseElement).toBeTruthy();
  });
});
