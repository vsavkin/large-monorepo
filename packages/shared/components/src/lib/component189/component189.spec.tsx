import { render } from '@testing-library/react';

import Component189 from './component189';

describe('Component189', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component189 />);
    expect(baseElement).toBeTruthy();
  });
});
