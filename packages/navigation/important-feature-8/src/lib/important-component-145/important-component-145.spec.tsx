import { render } from '@testing-library/react';

import ImportantComponent145 from './important-component-145';

describe('ImportantComponent145', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent145 />);
    expect(baseElement).toBeTruthy();
  });
});
