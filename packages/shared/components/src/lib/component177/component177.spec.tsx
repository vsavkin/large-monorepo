import { render } from '@testing-library/react';

import Component177 from './component177';

describe('Component177', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component177 />);
    expect(baseElement).toBeTruthy();
  });
});
