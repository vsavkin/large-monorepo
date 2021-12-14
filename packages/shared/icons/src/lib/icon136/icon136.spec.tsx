import { render } from '@testing-library/react';

import Icon136 from './icon136';

describe('Icon136', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon136 />);
    expect(baseElement).toBeTruthy();
  });
});
