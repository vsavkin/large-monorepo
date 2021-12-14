import { render } from '@testing-library/react';

import Component225 from './component225';

describe('Component225', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component225 />);
    expect(baseElement).toBeTruthy();
  });
});
