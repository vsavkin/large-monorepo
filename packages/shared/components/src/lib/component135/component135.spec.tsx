import { render } from '@testing-library/react';

import Component135 from './component135';

describe('Component135', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component135 />);
    expect(baseElement).toBeTruthy();
  });
});
