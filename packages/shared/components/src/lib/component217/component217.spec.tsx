import { render } from '@testing-library/react';

import Component217 from './component217';

describe('Component217', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component217 />);
    expect(baseElement).toBeTruthy();
  });
});
