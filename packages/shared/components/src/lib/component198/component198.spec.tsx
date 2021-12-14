import { render } from '@testing-library/react';

import Component198 from './component198';

describe('Component198', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component198 />);
    expect(baseElement).toBeTruthy();
  });
});
