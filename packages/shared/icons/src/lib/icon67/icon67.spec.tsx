import { render } from '@testing-library/react';

import Icon67 from './icon67';

describe('Icon67', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon67 />);
    expect(baseElement).toBeTruthy();
  });
});
