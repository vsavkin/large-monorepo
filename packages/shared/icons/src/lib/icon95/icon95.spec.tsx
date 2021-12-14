import { render } from '@testing-library/react';

import Icon95 from './icon95';

describe('Icon95', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon95 />);
    expect(baseElement).toBeTruthy();
  });
});
