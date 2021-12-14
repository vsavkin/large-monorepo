import { render } from '@testing-library/react';

import ImportantComponent21 from './important-component-21';

describe('ImportantComponent21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent21 />);
    expect(baseElement).toBeTruthy();
  });
});
