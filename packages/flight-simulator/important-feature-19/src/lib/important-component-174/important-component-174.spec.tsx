import { render } from '@testing-library/react';

import ImportantComponent174 from './important-component-174';

describe('ImportantComponent174', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent174 />);
    expect(baseElement).toBeTruthy();
  });
});
