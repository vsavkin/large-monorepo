import { render } from '@testing-library/react';

import ImportantComponent127 from './important-component-127';

describe('ImportantComponent127', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent127 />);
    expect(baseElement).toBeTruthy();
  });
});
