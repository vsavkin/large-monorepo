import { render } from '@testing-library/react';

import Component230 from './component230';

describe('Component230', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component230 />);
    expect(baseElement).toBeTruthy();
  });
});
