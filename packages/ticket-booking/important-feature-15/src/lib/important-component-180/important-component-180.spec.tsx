import { render } from '@testing-library/react';

import ImportantComponent180 from './important-component-180';

describe('ImportantComponent180', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent180 />);
    expect(baseElement).toBeTruthy();
  });
});
