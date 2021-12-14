import { render } from '@testing-library/react';

import Component244 from './component244';

describe('Component244', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component244 />);
    expect(baseElement).toBeTruthy();
  });
});
